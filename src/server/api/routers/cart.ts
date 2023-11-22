import { cartItem } from "@/utils/zodSchema";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";

export const cartRouter = createTRPCRouter({
  add: protectedProcedure
    .input(z.object({ developerId: z.string().min(1) }))
    .mutation(async ({ ctx, input: { developerId } }) => {
      const userId = ctx.session.user.id;
      await ctx.db.cartItem.create({ data: { developerId, userId } });
    }),

  getAll: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;
    const cart = await ctx.db.cartItem.findMany({
      where: { userId },
      include: {
        developer: { select: { image: true, name: true, slug: true } },
      },
    });
    return cart.map(
      ({ id, comment, developerId, developer: { image, name, slug } }) => ({
        id,
        developerId,
        comment,
        image,
        name,
        slug,
      }),
    );
  }),

  getByDevId: protectedProcedure
    .input(z.object({ developerId: z.string().min(1) }))
    .query(async ({ ctx, input: { developerId } }) => {
      const userId = ctx.session.user.id;
      const inCart = await ctx.db.cartItem.findUnique({
        where: { developerId_userId: { developerId, userId } },
      });
      return !!inCart;
    }),

  remove: protectedProcedure
    .input(z.object({ developerId: z.string().min(1) }))
    .mutation(async ({ ctx, input: { developerId } }) => {
      const userId = ctx.session.user.id;
      await ctx.db.cartItem.delete({
        where: { developerId_userId: { developerId, userId } },
      });
    }),

  update: protectedProcedure
    .input(cartItem)
    .mutation(async ({ ctx, input: { developerId, comment } }) => {
      const userId = ctx.session.user.id;
      await ctx.db.cartItem.update({
        where: { developerId_userId: { developerId, userId } },
        data: { comment },
      });
    }),
});

import dbConnect from "@/backend/config/dbConnect";
import { newBooking } from "@/backend/controllers/bookingController";
import { isAuthenticatedUser } from "@/backend/middlewares/auth";
import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";

interface RequestContext {}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

//router.use(isAuthenticatedUser).post(newBooking);
router.post(newBooking);

export async function POST(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx) as Promise<Response>;
}

import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

//FOR DELETING COMMENTS
export async function DELETE(req, { params }) {
  try {
    const { id, commentId } = await params;

    await Ticket.findByIdAndUpdate(id, {
      $pull: { comments: { _id: commentId } },
    });

    return NextResponse.json({ message: "Comment deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete comment" },
      { status: 500 }
    );
  }
}

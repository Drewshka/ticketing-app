// import Ticket from "../../../(models)/Ticket";

import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  try {
    const { id } = await params;
    const { text } = await req.json();

    if (!text || text.trim() === "") {
      return NextResponse.json(
        { message: "Comment text required" },
        { status: 400 }
      );
    }

    const ticket = await Ticket.findById(id);

    if (!ticket) {
      return NextResponse.json(
        { message: "Ticket not found" },
        { status: 404 }
      );
    }

    ticket.comments.push({ text });
    await ticket.save();

    return NextResponse.json({ message: "Comment added" }, { status: 201 });
  } catch (error) {
    console.error("Comment POST error:", error);
    return NextResponse.json(
      { message: "Failed to add comment", error },
      { status: 500 }
    );
  }
}

import { NextResponse, NextRequest } from "next/server";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

interface Params {
  params: {
    category?: string;
    slug?: string;
  };
}

export async function GET(request: NextRequest, { params }: Params) {
  try {
    const { slug } = params;

    const docRef = doc(db, "products", slug);

    const docSnaphot = await getDoc(docRef);

    return NextResponse.json(docSnaphot.data());
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.error();
  }
}

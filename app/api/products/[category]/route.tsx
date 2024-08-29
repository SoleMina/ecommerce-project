import { revalidateTag, revalidatePath } from "next/cache";
import { NextResponse, NextRequest } from "next/server";
import {
  collection,
  getDocs,
  query,
  where,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";
import { db } from "@/firebase/config";

interface Params {
  params: {
    category: string;
  };
}

export async function GET(request: NextRequest, { params }: Params) {
  try {
    //const { category } = params;
    const category = decodeURIComponent(params.category);

    const normalizedCategory = category.toLowerCase();

    const productsRef = collection(db, "products");

    const q =
      normalizedCategory === "all"
        ? productsRef
        : query(
            productsRef,
            where("category", "==", capitalize(normalizedCategory))
          );
    console.log(q, "qqqqq");

    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);

    const docs = querySnapshot.docs.map((doc) => doc.data());

    // Revalidate cache for the specific path and tag
    revalidateTag("products");
    revalidatePath(`/products/${category}`);

    return NextResponse.json(docs);
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.error();
  }
}

// Utility function to capitalize the first letter of each word in a string
function capitalize(str: string): string {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

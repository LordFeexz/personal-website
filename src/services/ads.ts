"use server";

import { doc, getDoc } from "firebase/firestore";
import { firestore } from "@/libs/firebase";

export async function getRunningTextAdsServices() {
  const ref = doc(firestore, "running_ads", "text");
  const docSnap = await getDoc(ref);
  return docSnap.data();
}

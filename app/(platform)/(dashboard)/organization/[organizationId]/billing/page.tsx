import { checkSubscription } from "@/lib/subscription";
import React from "react";
import { Info } from "../_component/info";
import { Separator } from "@/components/ui/separator";
import { SubcriptionButton } from "../_component/subscription-button";

const BillingPage = async () => {
  const isPro = await checkSubscription();
  return (
    <div className="w-full">
      <Info isPro={isPro} />
      <Separator className="my-2" />
      <SubcriptionButton isPro={isPro} />
    </div>
  );
};

export default BillingPage;

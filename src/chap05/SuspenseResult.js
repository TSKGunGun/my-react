import MyLoading from "./MyLoading";
import { Suspense } from "react";
import ThrowResult from "./ThrowResult";

export default function SuspenseResult() {
  return (
    <Suspense fallback={<MyLoading />}>
      <ThrowResult />
    </Suspense>
  );
}
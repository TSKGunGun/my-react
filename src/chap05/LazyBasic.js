import { Suspense, lazy } from "react";
import Loading from "./MyLoading";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const LazyButton = lazy(() => sleep(2000).then(() => import('./LazyButton')));

export default function LazyBasic() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyButton />
    </Suspense>
  )
}
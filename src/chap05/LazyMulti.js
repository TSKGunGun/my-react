import { Suspense, lazy } from "react";
import Loading from "./MyLoading";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const LazyButton = lazy(() => sleep(2000).then(() => import('./LazyButton')));
const LazyButton2 = lazy(() => sleep(4000).then(() => import('./LazyButton2'))); 

export default function LazyMulti() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyButton />
      <LazyButton2 />
    </Suspense>
  )
}
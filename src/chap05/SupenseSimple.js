import { Suspense } from 'react';
import MyLoading from './MyLoading';
import ThrowPromise from './ThrowPromise';

export default function SuspenseSimple() {
  return (
    <Suspense fallback={<MyLoading />}>
      <ThrowPromise />
    </Suspense>
  );
}
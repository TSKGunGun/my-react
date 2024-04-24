export default function WrapPromise(promise) {
  let status = 'pending';
  let data;
  let wrapper = promise.then(
    result => {
      status = 'fulfilled';
      data = result;
    },
    e => {
      status = 'rejected';
      data = e;
    }
  )

  return {
    get() {
      switch (status) {
        case 'fulfilled':
          return data;
        case 'rejected':
          return data;
        case 'pending':
          throw wrapper;
        default:
          break;
      }
    }
  }
}
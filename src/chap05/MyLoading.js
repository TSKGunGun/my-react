import './loading.css';

export default function MyLoading() {
  return (
    <div className="spinner-box">
      <div className="circle-border">
        <div className="circle-core"></div>
      </div>  
    </div>
  );
}
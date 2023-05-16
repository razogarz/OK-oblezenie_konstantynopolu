function QuestionCard(props: any) {
  let que = props.que;
  let ans = props.ans;
  return (
    <div className="card w-full my-2 bg-stone-600 text-primary-content">
      <div className="card-body">
        <p className="text-xs text-slate-50">{que}</p>
        <p className="text-xl text-slate-300">{ans}</p>
      </div>
    </div>
  );
}

/*<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div> */
export default QuestionCard;

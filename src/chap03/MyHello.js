export default function MyHello({ myName, myMachine="マシン" }) {
  if(!myMachine) myMachine = 'マシン';
  
  return (
    <div>こんにちは、{myName}さん！ {myMachine}の調子はいかがでしょうか？</div>
  );
}
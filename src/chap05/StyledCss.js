import {globalCss, resolveCss} from './StyledCSS.css'

export default function StyledCss() {
  return (
    <>
      
      <style jsx>{globalCss}</style>
      <h3>Styled JSX</h3>
      {resolveCss.styles}
      <div className={`panel ${resolveCss.className}`}><b>Styled JSX</b>は、JSX式にスタイル定義</div>
    </>
  );
}
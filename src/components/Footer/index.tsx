import React, { useContext } from "react";
import {
  VscArrowSwap,
  VscError,
  VscBellDot,
  VscFeedback,
  VscCheckAll,
  VscBroadcast,
  VscJson,
  VscSync,
  VscSourceControl,
  VscWarning,
} from "react-icons/vsc";
import { ThemeContext } from "../../apps/AppProvider/ThemeProvider";
import cn from "classnames";

const Footer: React.FC = () => {
  const {
    theme: { footerStyles },
  } = useContext(ThemeContext);

  const btnStyles = cn(
    footerStyles.buttonCls.base,
    footerStyles.buttonCls.color.primary
  );

  const btn2Styles = cn(
    footerStyles.buttonCls.base,
    footerStyles.buttonCls.color.success,
    "h-6 w-12 justify-center"
  );

  return (
    <div className="h-6 w-full fixed bottom-0 bg-blueText flex items-center justify-between text-white text-xs">
      <div className="flex items-center gap-3">
        <div className={btn2Styles}>
          <VscArrowSwap />
        </div>
        <button className={btnStyles}>
          <VscSourceControl />
          adrian-ui
        </button>
        <button className={btnStyles}>
          <VscSync />
        </button>
        <button className={btnStyles}>
          <VscError />
          1
          <VscWarning />0
        </button>
        <button className={btnStyles}>Git Graph</button>
      </div>
      {/* //////////////////////////////////// */}
      <div className="flex items-center gap-3 pr-3">
        <button className={btnStyles}>CRLF</button>
        <button className={btnStyles}>
          <VscJson />
          Javascript
        </button>
        <button className={btnStyles}>
          <VscBroadcast />
          Go Live
        </button>
        <button className={btnStyles}>
          <VscCheckAll />
          Prettier
        </button>
        <button className={btnStyles}>
          <VscFeedback />
        </button>
        <button className={btnStyles}>
          <VscBellDot />
        </button>
      </div>
    </div>
  );
};

export default Footer;

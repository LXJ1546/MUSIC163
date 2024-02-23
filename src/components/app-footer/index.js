import React, { memo } from "react";
import { AppFooterWrapper } from "./style";
import { footerLinks, footerImages } from "@/assets/data/local_data";

const AppFooter = () => {
  return (
    <AppFooterWrapper>
      <div className="content wrap-v2">
        <div className="top">
          {footerImages.map((item) => {
            return (
              <div className="item" key={item.title}>
                <a
                  className="link"
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                ></a>
                <span className="title">{item.title}</span>
              </div>
            );
          })}
        </div>
        <div className="bottom"></div>
      </div>
    </AppFooterWrapper>
  );
};
export default memo(AppFooter);

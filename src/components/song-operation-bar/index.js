import React, { memo } from "react";
import { OperationBarWrapper } from "./style";
const SongOperationBar = (props) => {
  const { favorTitle, shareTitle='未知', downloadTitle='下载', commentTitle='未知' } = props;
  return (
    <OperationBarWrapper>
      <span className="play">
        <a href="/abc" className="play-icon sprite_button">
          <span className="play sprite_button">
            <i className="sprite_button"></i>
            <span>播放</span>
          </span>
        </a>
        <a href="/abc" className="add-icon sprite_button">
          +
        </a>
      </span>
      <a href="/abc" className="item sprite_button">
        <i className="icon favor-icon sprite_button">{favorTitle}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon share-icon sprite_button">{shareTitle}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon download-icon sprite_button">{downloadTitle}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon comment-icon sprite_button">{commentTitle}</i>
      </a>
    </OperationBarWrapper>
  );
};
export default memo(SongOperationBar);

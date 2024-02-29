import styled from "styled-components";

export const PlayerBarWrapper = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
  }
`;

export const BarControl = styled.div`
  display: flex;
  align-items: center;

  .btn {
    cursor: pointer;
  }

  .prev,
  .next {
    width: 28px;
    height: 28px;
  }

  .prev {
    background-position: 0 -130px;
    &:hover {
      background-position: -30px -130px;
    }
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0 ${(props) => (props.isPlaying ? "-165px" : "-204px")};
  }

  .next {
    background-position: -80px -130px;
    &:hover {
      background-position: -110px -130px;
    }
  }
`;

export const BarPlayerInfo = styled.div`
  display: flex;
  width: 642px;
  align-items: center;

  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }

  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      color: #e1e1e1;
      position: relative;
      top: 8px;
      left: 8px;

      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .ant-slider {
        position: relative;
        top: -3px;
        width: 493px;
        margin-right: 10px;

        .ant-slider-rail {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png")}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;
        }
      }

      .time {
        .current {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`;

export const BarOperator = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 3px;

  .btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .left {
    display: flex;
    align-items: center;
  }

  .pip {
    background: url(${require("@/assets/img/pip_icon")});
    &:hover {
      background-position-y: -25px;
    }
  }

  .favor {
    background-position: -88px -163px;
    &:hover {
      background-position: -88px -189px;
    }
  }

  .share {
    background-position: -114px -163px;
    &:hover {
      background-position: -114px -189px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;

    .volumeSlider {
      position: absolute;
      bottom: 36px;
      left: 85px;
      clear: both;
      width: 32px;
      height: 113px;
      background-position: 0 -503px;

      .ant-slider {
        height: 90px;
        top: 6px;

        .ant-slider-track {
          background: url(${require("@/assets/img/playbar_sprite.png")});
          background-position: -40px bottom;
        }

        .ant-slider-handle {
          width: 18px;
          height: 20px;
          border: none;
          left: 2px;
          background: url(${require("@/assets/img/iconall.png")});
          background-position: -40px -250px;
          &:hover {
            background-position: -40px -280px;
          }
        }
      }
    }

    .volume {
      background-position: -2px -248px;
      &:hover {
        background-position: -31px -248px;
      }
    }

    .mode {
      background-position: ${(props) => {
        switch (props.playMode) {
          case 0:
            return "-3px -344px";
          case 1:
            return "-66px -248px";
          default:
            return "-66px -344px";
        }
      }};

      &:hover {
        background-position: ${(props) => {
          switch (props.playMode) {
            case 0:
              return "-33px -344px";
            case 1:
              return "-93px -248px";
            default:
              return "-93px -344px";
          }
        }};
      }
    }

    .playlist {
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
      &:hover {
        background-position: -42px -98px;
      }
    }
  }
`;

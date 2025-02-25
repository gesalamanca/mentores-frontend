import styled from "styled-components";
import { SwiperSlide as SwiperSlideComponent } from "swiper/react";

export const ArrowLeft = styled.button`
  position: absolute;
  top: -60px;
  right: 80px;
  background: transparent;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  border: 1px solid #046ad0;
  width: 40px;
  height: 40px;
  font-size: 25px;
  color: ${(props) => (props.isDisabled ? "#95c6ff" : "#046ad0")};
  font-weight: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: visible !important;
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};

  &:hover {
    color: #95c6ff;
  }
`;

export const ArrowRight = styled.button`
  position: absolute;
  top: -60px;
  right: 30px;
  background: transparent;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  border: 1px solid #046ad0;
  width: 40px;
  height: 40px;
  font-size: 25px;
  color: ${(props) => (props.isDisabled ? "#95c6ff" : "#046ad0")};
  font-weight: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: visible !important;
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};

  &:hover {
    color: #95c6ff;
  }
`;

export const SwiperContainer = styled.div`
  position: relative;
`;

export const SwiperSlide = styled(SwiperSlideComponent)`
  width: 320px;
  margin-right: 0;
  margin-left: 0;
  gap: 0;
`;
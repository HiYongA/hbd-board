import { Button } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const AuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // alert("TODO 요구사항에 맞추어 기능을 완성해주세요.");

    // TODO: localStorage의 토큰 검색
    const token = localStorage.getItem("token");
    // TODO: localStorage의 이메일 검색
    const email = localStorage.getItem("email");
    if (!token || !email) {
      // TODO: 토큰 또는 이메일 중 하나라도 없을 경우 "토큰 또는 이메일이 없습니다. 로그인해주세요." alert
      alert("토큰 또는 이메일이 없습니다. 로그인해주세요.");
      // TODO: localStorage에 있는 token, email을 제거
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      // TODO: "/auth"로 이동
      navigate("/auth");
      return;
    }
  }, [navigate]);

  const handleLogoutButtonClick = () => {
    // alert("TODO 요구사항에 맞추어 기능을 완성해주세요.");
    // TODO: "로그아웃 하시겠습니까?" confirm
    const isConfirmed = window.confirm("로그아웃 하시겠습니까?");
    if (isConfirmed) {
      // TODO: yes 선택 시, localStorage의 token과 email 제거
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      // TODO: "로그아웃이 완료되었습니다" alert
      alert("로그아웃이 완료되었습니다");
      // TODO: "/auth"로 이동
      navigate("/auth");
    }
  };

  return (
    <>
      <StyledHeaderBox>
        <Button onClick={handleLogoutButtonClick}>로그아웃</Button>
      </StyledHeaderBox>
      <Outlet />
    </>
  );
};

export default AuthLayout;

const StyledHeaderBox = styled.div`
  display: flex;
  justify-content: right;
  padding: 10px;
`;

import React from "react";
import { Breadcrumb, Stack, Button } from "react-bootstrap";
import "../../../assets/contents.css"

const MDM_SBD_A0101000000 = () => {
  return (
    <div className="contents">
      <Stack direction="horizontal" className="page-header">
        <h2>Company</h2>
        <Breadcrumb className="ms-auto breadcrumb-wrap">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">
            SITE
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Company</Breadcrumb.Item>
        </Breadcrumb>
      </Stack>

      <div className="grid-container">

        <div className="grid-section">
          <Stack direction="horizontal" className="grid-headline">
            <div className="result-info">
              <span className="title">Result</span>
              총 00개
            </div>
            <div className="grid-top-buttons ms-auto">
              <Button variant="outline-secondary" size="sm">
                SQL Viewer
              </Button>
              <Button variant="outline-secondary" size="sm">
                엑셀 다운로드
              </Button>
            </div>
          </Stack>

          <div className="grid-area">

            <div style={{ height: "600px", background: "#ddd" }}>그리드 영역</div>

          </div>

          <div className="grid-buttons text-end">
            <Button variant="secondary">등록</Button>
            <Button variant="secondary">삭제</Button>
            <Button variant="secondary">저장</Button>
            <Button variant="primary">확정</Button>
          </div>

        </div>

        <div className="grid-section">

          <div className="grid-area">

            <div style={{ height: "600px", background: "#ddd" }}>그리드 영역</div>

          </div>

          <div className="grid-buttons text-end">
            <Button variant="secondary">등록</Button>
            <Button variant="secondary">삭제</Button>
            <Button variant="secondary">저장</Button>
            <Button variant="primary">확정</Button>
          </div>
        </div>

      </div>
    </div>
  )
}
export {MDM_SBD_A0101000000};
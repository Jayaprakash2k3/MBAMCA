import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Component";
import ErrorImage from "../images/gfx/error-504.svg";
import PageContainer from "../layout/page-container/PageContainer";

const Error504Modern = () => {
  return (
    <PageContainer>
      <div className="nk-block nk-block-middle wide-md mx-auto">
        <div className="nk-block-content nk-error-ld text-center">
          <img className="nk-error-gfx" src={ErrorImage} alt="error" />
          <div className="wide-xs mx-auto">
            <h3 className="nk-error-title">Seat Matrix will be Collected Soon</h3>
           
            <Link to={`${process.env.PUBLIC_URL}/`}>
              <Button color="primary" size="lg" className="mt-2">
                Back To Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
export default Error504Modern;

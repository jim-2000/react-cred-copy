import React from "react";
import Slider from "../slider/Slider";
import Buttons from "../utils/Buttons";
import "./appRating.css";

const getIosPrefix = () => {
  return (
    <img
    src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png"
      className="app-rating-icon"
    />
  );
};

const getAndroidPrefix = () => {
  return (
    <img
      src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png"
      className="app-rating-icon"
    />
  );
};
const AppRating = () => {
  return (
    <div className="max-width app-rating flex">
      <div className="flex app-rating-block flex-col">
        <div className="flex">
          <div className="app-rating-value flex flex-col">
            4.8
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
              className="app-rating-stars"
              style={{paddingTop:"60px"}}
            />
          </div>
          <div className="app-rating-platform">
            app <br /> store
          </div>
        </div>
        <div className="non-mobile">
          <Buttons
        prefix={getIosPrefix()}
        buttonsText="Download the app"
        customCls="app-rating-button"
          />
        </div>
      </div>
      <div className="flex app-rating-block flex-col">
        <div className="flex">
          <div className="app-rating-value flex flex-col">
            4.7
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png"
              className="app-rating-stars"
              style={{paddingTop:"60px"}}
            />
          </div>
          <div className="app-rating-platform">
            play <br /> store
          </div>
        </div>
        <div className="non-mobile">
          <Buttons
            prefix={getAndroidPrefix()}
            buttonsText="Download the app"
            customCls="app-rating-button"
          />
        </div>
      </div>
      <div className="only-mobile">
        <Buttons buttonText="Download the app" />
      </div>
    </div>
  );
};

export default AppRating;
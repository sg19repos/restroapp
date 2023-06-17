import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";
import CommonModuleRoutes from "./Routes/CommonModuleRoutes";
import TopNavBar from "../../../Common/UIElements/atoms/TopNavigationBar";
import RoutesTemp from "../../../Routes";

const LayoutContainer = () => {
  const [showNavBar, setShowNavBar] = useState(true);
  const location = useLocation();
  const updatedLocation = location.pathname || window.location.pathname;
  useEffect(() => {
    let routeElement = CommonModuleRoutes.find((element) => {
      return element.path === updatedLocation?.split("/")?.[1];
    });
    setShowNavBar(routeElement?.showNavBar);
  }, [updatedLocation]);
  return (
    <>
      <Grid
        container
        layout={"column"}
        className={"mainBackground"}
        style={{
          // minHeight: !["/signup", "/login"].includes(history.location.pathname)
          // minHeight: footerPresent ? "calc(90vh)" : "calc(100vh)",
          minHeight: "calc(100vh)",
        }}
      >
        {showNavBar && <TopNavBar sx={{ height: "10vh" }} />}
        <Grid
          item
          xs={12}
          style={{
            height: showNavBar ? "90vh" : "100vh",
            marginTop: showNavBar ? "1.8rem" : "",
          }}
        >
          <Box
            m={1}
            p={2}
            minHeight={"92%"}
            className={"mainBorder plainBorder roundCorners"}
          >
            {/*<PickupLocation />*/}
            {/*<Pincode />*/}
            {/*<CategoryList />*/}
            {/*<ConsignmentPhysics />*/}
            {/*<TimePicker fullWidth={false} />*/}
            {/*{"\u2728"}*/}
            {/*<Consignments />*/}
            {/*<ConsignmentsList />*/}
            {/*<ViewConsignmentDetails />*/}
            {/*<CreateJourney />*/}
            {/*<VehicleSelection />*/}
            {/*<LocationSearch_obselete />*/}
            {/*<CarrierList />*/}
            {/*<ViewCarrier />*/}
            {/*<ModeSelection />*/}
            <RoutesTemp />
            {/*{children}*/}
            {/*{<OrderPreview />}*/}
          </Box>
        </Grid>
      </Grid>
      {/*{!["/signup", "/login"].includes(history.location.pathname) && (*/}
    </>
  );
};

export default LayoutContainer;

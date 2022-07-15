import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "./login";
import { Home } from "./home";
import { TypeSignup } from "./userSignup/role";
import { SignupUser } from "./userSignup/SignupUser";
import { SignupUser1 } from "./userSignup/SignupUser1";
import { SignupUser2 } from "./userSignup/SignupUser2";
import { Splashscreen } from "./splashscreen";
import { AccountVerfication } from "./accountVerfication";
import { SP1 } from "./serviceProvider/SP1";
import { SP2 } from "./serviceProvider/SP2";
import { Drawer1 } from "./Drawer";
import { SelectedAdoptPet } from "./SelectedAdoptPet";
import { AdoptionList } from "./AdoptionList";
import { PetProfile } from "./PetProfile";
import { SelectedBreedPet } from "./SelectedBreedPet";
import { PetAccount } from "./PetAccount";
import { PetVaccines } from "./PetVaccines";
import { HistoryVaccines } from "./historyvaccines";
import { VaccinesDescription } from "./vaccinesdescription";
import { BookVet } from "./BookVet";
import { BookTrainer } from "./BookTrainer";
import { BookPetnanny } from "./BookPetnanny";
import { Service, service } from "./services";
import { Hotelsmap } from "./Hotelsmap";
import { Vetdetails } from "./vetdetails";
import { MainTabScreen } from "./MainTabScreen";
import { UserProfile } from "./UserProfile";
import { DrawerContent } from "./DrawerContent";
import { Trainerdetails } from "./trainerdetails";
import { Petnannydetails } from "./petnannydetails";
import { PetDetection } from "./PetDetection";
import { Reports } from "./report/reports";
import { CreateReport } from "./report/createReport";
import { ReportComments } from "./report/reportComments";
import { Fourms } from "./forums/fourms";
import { CreateFourm } from "./forums/createfourm";
import { Comments } from "./forums/comments";

const Stack = createStackNavigator();
export const RootStackSCreen = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "transparent",
      },
      headerTransparent: true,
      headerTitle: "",
      headerLeft: null,
    }}
  >
    <Stack.Screen name="Splahscreen" component={Splashscreen} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Drawer1" component={Drawer1} />
    <Stack.Screen name="HomeDrawer" component={MainTabScreen} />
    <Stack.Screen name="DrawerContent" component={DrawerContent} />
    <Stack.Screen name="UserProfile" component={UserProfile} />
    <Stack.Screen name="typeSignup" component={TypeSignup} />
    <Stack.Screen name="SignupUser" component={SignupUser} />
    <Stack.Screen name="SignupUser1" component={SignupUser1} />
    <Stack.Screen name="SignupUser2" component={SignupUser2} />
    <Stack.Screen name="SP1" component={SP1} />
    <Stack.Screen name="SP2" component={SP2} />
    <Stack.Screen name="PetProfile" component={PetProfile} />
    <Stack.Screen name="PetAccount" component={PetAccount} />
    <Stack.Screen name="SelectedAdoptPet" component={SelectedAdoptPet} />
    <Stack.Screen name="SelectedBreedPet" component={SelectedBreedPet} />
    <Stack.Screen name="PetVaccine" component={PetVaccines} />
    <Stack.Screen name="HistoryVaccine" component={HistoryVaccines} />
    <Stack.Screen name="VaccineDescription" component={VaccinesDescription} />
    <Stack.Screen name="Service" component={Service} />
    <Stack.Screen name="Bookvet" component={BookVet} />
    <Stack.Screen name="Booktrainer" component={BookTrainer} />
    <Stack.Screen name="Bookpetnanny" component={BookPetnanny} />
    <Stack.Screen name="BookHotel" component={Hotelsmap} />
    <Stack.Screen name="Vetdetails" component={Vetdetails} />
    <Stack.Screen name="trainerdetails" component={Trainerdetails} />
    <Stack.Screen name="petnannydetails" component={Petnannydetails} />
    <Stack.Screen name="AccountVerfication" component={AccountVerfication} />
    <Stack.Screen name="BreedDetection" component={PetDetection} />
    <Stack.Screen name="Report" component={Reports} />
    <Stack.Screen name="Forum" component={Fourms} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="CreateFourm" component={CreateFourm} />
    <Stack.Screen name="ForumComments" component={Comments} />
    <Stack.Screen name="CreateReport" component={CreateReport} />
    <Stack.Screen name="reportComments" component={ReportComments} />
  </Stack.Navigator>
);

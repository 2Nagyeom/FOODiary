import { NaverMapView } from "@mj-studio/react-native-naver-map";
import React, {useRef} from "react";
import { Dimensions, SafeAreaView, Text } from "react-native";

const {width, height } = Dimensions.get('screen');

const Register = () => {
    const ref = useRef('');

    const jejuRegion = {
        latitude: 33.20530773,
        longitude: 126.14656715029,
        latitudeDelta: 0.38,
        longitudeDelta: 0.8,
    };
    
    return (
        <SafeAreaView>
            <NaverMapView
                ref={ref}
                style={{ width : width, height : height}}
                // mapType={mapType}
                layerGroups={{
                    BUILDING: true,
                    BICYCLE: false,
                    CADASTRAL: false,
                    MOUNTAIN: false,
                    TRAFFIC: false,
                    TRANSIT: false,
                }}
                initialRegion={{
                    longitude : jejuRegion.longitude,
                    latitude : jejuRegion.latitude,
                }}
                // isIndoorEnabled={indoor}
                // symbolScale={symbolScale}
                // lightness={lightness}
                // isNightModeEnabled={nightMode}
                // isShowCompass={compass}
                // isShowIndoorLevelPicker={indoorLevelPicker}
                // isShowScaleBar={scaleBar}
                // isShowZoomControls={zoomControls}
                // isShowLocationButton={myLocation}
                isExtentBoundedInKorea
                onInitialized={() => console.log('initialized!')}
                onOptionChanged={() => console.log('Option Changed!')}
                // onCameraChanged={(args) => console.log(`Camera Changed: ${formatJson(args)}`)}
                // onTapMap={(args) => console.log(`Map Tapped: ${formatJson(args)}`)}
             />
        </SafeAreaView>
    )
}

export default Register;
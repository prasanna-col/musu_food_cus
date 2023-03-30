import React from "react";
import { Text, View } from "react-native"
import AppButton from "../../components/AppButton";
import AppContainer from "../../components/AppContainer";
import AppSafeAreaView from "../../components/AppSafeArea";

import {
    Chart,
    VerticalAxis,
    HorizontalAxis,
    Line,
    Area
} from "react-native-responsive-linechart";

const Analytics = ({ navigation }) => {

    const data1 = [
        { x: -2, y: 1 },
        { x: -1, y: 0 },
        { x: 8, y: 13 },
        { x: 9, y: 11.5 },
        { x: 10, y: 12 }
    ]

    const data2 = [
        { x: -2, y: 15 },
        { x: -1, y: 10 },
        { x: 0, y: 12 },
        { x: 1, y: 7 },
        { x: 8, y: 12 },
        { x: 9, y: 13.5 },
        { x: 10, y: 18 }
    ]

    return (
        <AppSafeAreaView edges={["left", "right", "bottom"]}>
            <AppContainer>
                <Text>Analytics screen</Text>
                {/* scrollable chart:  https://github.com/xanderdeseyn/react-native-responsive-linechart/blob/master/docusaurus/docs/line.md */}
                {/* <Chart
                    style={{ height: 200, width: '100%', backgroundColor: '#eee' }}
                    xDomain={{ min: -2, max: 10 }}
                    yDomain={{ min: -2, max: 20 }}
                    padding={{ left: 20, top: 10, bottom: 10, right: 10 }}
                >
                    <VerticalAxis tickValues={[0, 4, 8, 12, 16, 20]} />
                    <HorizontalAxis tickCount={3} />
                    <Line data={data1} smoothing="none" theme={{ stroke: { color: 'red', width: 1 } }} />
                    <Line data={data2} smoothing="cubic-spline" theme={{ stroke: { color: 'blue', width: 1 } }} />
                </Chart> */}

                <Chart
                    style={{ height: 200, width: '100%' }}
                    data={data2}
                    padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
                    xDomain={{ min: 0, max: 10 }}
                    yDomain={{ min: 0, max: 20 }}
                    viewport={{ size: { width: 5 } }}
                >
                    <VerticalAxis
                        tickValues={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]}
                        theme={{
                            axis: { stroke: { color: '#aaa', width: 2 } },
                            ticks: { stroke: { color: '#aaa', width: 2 } },
                            labels: { formatter: (v: number) => v.toFixed(2) },
                        }}
                    />
                    <HorizontalAxis
                        tickValues={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]}
                        theme={{
                            axis: { stroke: { color: '#aaa', width: 2 } },
                            ticks: { stroke: { color: '#aaa', width: 2 } },
                            labels: { label: { rotation: 50 }, formatter: (v) => v.toFixed(1) },
                        }}
                    />
                    <Line
                        theme={{
                            stroke: { color: 'red', width: 2 },
                        }}
                        smoothing="cubic-spline"
                    />
                    <Area theme={{ gradient: { from: { color: '#f39c12', opacity: 0.4 }, to: { color: '#f39c12', opacity: 0.4 } } }} smoothing="cubic-spline" />
                </Chart>
                {/* <AppButton
                    title={"Next >"}
                    boldtext
                    onPress={() => { navigation.navigate("CreatePassword Screen") }}
                    small
                    quater
                    style={{ marginTop: 10 }}
                /> */}
            </AppContainer>
        </AppSafeAreaView>
    )
}

export default Analytics;
import React, { useEffect, useState } from 'react'
import { FlatList, Alert } from 'react-native'
import Geolocation from 'react-native-geolocation-service'

import axios from 'axios'
import styled from 'styled-components/native'

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #eee;
`

const WeatherContainer = styled(FlatList)``

const LoadingView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Loading = styled.ActivityIndicator`
  margin-bottom: 16px;
`
const LoadingLabel = styled.Text`
  font-size: 16px;
`

const WeatherItemContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`

const Weather = styled.Text`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: bold;
`

const Temperature = styled.Text`
  font-size: 16px;
`

interface Props {}

const API_KEY = `055e322812a99b2799f2a7c3c0e41bf7`

interface IWeather {
  temperature?: number
  weather?: string
  isLoading: boolean
}

const WeatherView: React.FC<Props> = () => {
  const [weatherInfo, setWeatherInfo] = useState<IWeather>({
    temperature: undefined,
    weather: undefined,
    isLoading: false,
  })

  const getCurrentWeather = () => {
    setWeatherInfo({ isLoading: false })
    Geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords
        const reqUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`

        try {
          const res = await axios.get(reqUrl)

          setWeatherInfo({
            temperature: res.data.main.temp,
            weather: res.data.weather[0].main,
            isLoading: true,
          })
        } catch (error) {
          console.log(error)
          setWeatherInfo({ isLoading: true })
          showError('날씨 정보를 가져오는데 실패하였습니다.')
        }
      },
      (error) => {
        console.log(error)
        setWeatherInfo({ isLoading: true })
        showError('위치 정보를 가져오는데 실패하였습니다.')
      }
    )
  }

  const showError = (message: string): void => {
    setTimeout(() => {
      Alert.alert(message)
    }, 500)
  }

  useEffect(() => {
    getCurrentWeather()
  }, [])

  let data = []

  const { isLoading, weather, temperature } = weatherInfo

  if (weather && temperature) {
    data.push(weatherInfo)
  }

  return (
    <>
      <Container>
        <WeatherContainer
          onRefresh={() => getCurrentWeather()}
          refreshing={!isLoading}
          data={data}
          keyExtractor={(item, index) => {
            return `Weather-${index}`
          }}
          ListEmptyComponent={
            <LoadingView>
              <Loading size="large" color="$1976D2" />
              <LoadingLabel>Loading...</LoadingLabel>
            </LoadingView>
          }
          renderItem={({ item }) => (
            <WeatherItemContainer>
              <Weather>{(item as IWeather).weather}</Weather>
              <Temperature>{(item as IWeather).temperature}℃</Temperature>
            </WeatherItemContainer>
          )}
          contentContainerStyle={{ flex: 1 }}
        />
      </Container>
    </>
  )
}
export default WeatherView

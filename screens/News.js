import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { services } from "../services/services";
import {
  NativeBaseProvider,
  FlatList,
  ScrollView,
  Divider,
  Image,
  Spinner,
} from "native-base";
import moment from "moment";
export default function News({ route }) {
  const { category } = route.params; // Accede a la categoría pasada por initialParams
  const [newsData, setNewsData] = useState([]);

  const styles = StyleSheet.create({
    newsContainer: {
      padding: 10,
    },
    title: {
      fontSize: 18,
      marginTop: 10,
      fontWeight: "600",
    },
    newsDescription: {
      fontSize: 16,
      marginTop: 10,
    },
    date: {
      fontSize: 14,
    },
    spinner: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 400,
    },
  });

  useEffect(() => {
    async function recuperarDatos() {
      try {
        let data = await services(category);
        setNewsData(data);
      } catch (error) {
        alert("Error: " + error.message);
      }
    }
    recuperarDatos();
  }, [category]); // Ahora el efecto se ejecutará al cambiar de categoría

  return (
    <NativeBaseProvider>
      <ScrollView height={850}>
        {newsData.length > 0 ? (
          <FlatList
            data={newsData}
            renderItem={({ item }) => (
              <View>
                <View style={styles.newsContainer}>
                  {item.urlToImage && (
                    <Image
                      width={550}
                      height={250}
                      resizeMode={"cover"}
                      source={{
                        uri: item.urlToImage,
                      }}
                      alt="Alternate Text"
                    />
                  )}
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.date}>
                    {moment(item.publishedAt).format("LLL")}
                  </Text>
                  <Text style={styles.newsDescription}>{item.description}</Text>
                </View>
                <Divider my={2} bg="#e0e0e0" />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <View style={styles.spinner}>
            <Spinner color="danger.400" />
          </View>
        )}
      </ScrollView>
    </NativeBaseProvider>
  );
}

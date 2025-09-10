// app/index.tsx
import { ImageBackground, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "../styles/_mainstyle";
import {
  BACKGROUNDIMAGE,
  HEROLOGO,
  GOOGLELOGO,
  FACEBOOKLOGO,
} from "../constants";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={BACKGROUNDIMAGE}
      style={styles.backgroundImageContainer}
    >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <ImageBackground
            source={HEROLOGO}
            style={{ width: 150, height: 150 }}
            resizeMode="contain"
          />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Welcome to ProDev</Text>
          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>
              Build amazing apps with our platform
            </Text>
          </View>
        </View>

        <View style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 40 }}>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.buttonPrimary}
              onPress={() => router.push("/join")}
            >
              <Text style={styles.buttonPrimaryText}>Join Now</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonSecondary}
              onPress={() => router.push("/signin")}
            >
              <Text style={styles.buttonSecondaryText}>Sign In</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonGroupSubText}>
            <ImageBackground
              source={GOOGLELOGO}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
            <ImageBackground
              source={FACEBOOKLOGO}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
            <Text style={{ color: "white", fontSize: 14 }}>
              Continue with social
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
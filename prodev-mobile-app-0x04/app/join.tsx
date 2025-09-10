// app/join.tsx
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "../styles/_joinstyle";
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from "../constants";

export default function JoinScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Back Button & Logo */}
      <View style={styles.iconsection}>
  <TouchableOpacity onPress={() => router.back()}>
    <Text>← Back</Text>
  </TouchableOpacity>
  <Image
    source={HEROLOGOGREEN}
    style={{ width: 120, height: 40 }}
    resizeMode="contain"
  />
  {/* Spacer */}
  <View style={{ width: 24 }} />
</View>

      {/* Title */}
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Join Now</Text>
        <Text style={styles.subText}>Create your account to get started</Text>
      </View>

      {/* Form */}
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Full Name</Text>
        <TextInput style={styles.formControl} placeholder="Enter your name" />

        <Text style={styles.formLabel}>Email Address</Text>
        <TextInput
          style={styles.formControl}
          placeholder="Enter your email"
          keyboardType="email-address"
        />

        <Text style={styles.formLabel}>Password</Text>
        <View style={styles.formPasswordControl}>
          <TextInput
            style={styles.passwordControl}
            placeholder="Enter password"
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or continue with</Text>
        <View style={styles.divider} />
      </View>

      {/* Social Buttons */}
      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#DB4437' }]}>
          <Image source={GOOGLELOGO} style={{ width: 24, height: 24 }} />
          <Text style={styles.secondaryButtonText}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#3B5998' }]}>
          <Image source={FACEBOOKLOGO} style={{ width: 24, height: 24 }} />
          <Text style={styles.secondaryButtonText}>Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Sign In Link */}
      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/signin")}>
          <Text style={styles.signupSubTitleText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
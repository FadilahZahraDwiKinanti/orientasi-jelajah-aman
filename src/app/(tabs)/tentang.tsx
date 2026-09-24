import { Text, View } from "react-native";
import { spacing, typeScale } from "../../constants/styles";

export default function TentangScreen() {
  return (
    <View style={{ flex: 1, padding: spacing.besar }}>
      <Text
        accessibilityLabel="Judul halaman Tentang"
        style={{
          fontSize: typeScale.judul,
          fontWeight: "700",
          marginBottom: spacing.sedang,
        }}
      >
        Tentang
      </Text>

      <Text style={{ fontSize: typeScale.isi, lineHeight: 22 }}>
        Aplikasi Orientasi Jelajah Aman membantu pengguna menjelajahi lingkungan
        dengan lebih aman.
      </Text>
    </View>
  );
}
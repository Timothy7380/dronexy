import React, { useRef, useState } from 'react';
import {
  View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Circle } from 'react-native-svg';
import { colors, fonts } from '../theme';

const { width } = Dimensions.get('window');

const SLIDES = [
  { key: '1', text: 'Book verified professionals and track every mission from start to finish.' },
  { key: '2', text: 'Book, track, communicate, and manage aerial missions with ease.' },
  { key: '3', text: 'From assignment to completion, every mission is tracked and accountable.' },
];

// Circular "next" button with progress ring (matches Figma arc that grows per slide)
function NextButton({ progress, onPress }) {
  const size = 66;
  const stroke = 3;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress} style={styles.nextWrap}>
      <Svg width={size} height={size} style={StyleSheet.absoluteFill}>
        <Circle cx={size / 2} cy={size / 2} r={r} stroke="#3A3A3A" strokeWidth={stroke} fill="none" />
        <Circle
          cx={size / 2} cy={size / 2} r={r}
          stroke={colors.white} strokeWidth={stroke} fill="none"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - progress)}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </Svg>
      <View style={styles.nextInner}>
        <Ionicons name="chevron-forward" size={22} color={colors.white} />
      </View>
    </TouchableOpacity>
  );
}

export default function OnboardingScreen({ navigation }) {
  const [index, setIndex] = useState(0);
  const listRef = useRef(null);

  const next = () => {
    if (index < SLIDES.length - 1) {
      listRef.current?.scrollToIndex({ index: index + 1, animated: true });
    } else {
      navigation.replace('GetStarted');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.skip} onPress={() => navigation.replace('GetStarted')}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <FlatList
        ref={listRef}
        data={SLIDES}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.key}
        onMomentumScrollEnd={(e) => setIndex(Math.round(e.nativeEvent.contentOffset.x / width))}
        renderItem={({ item }) => (
          <View style={{ width, justifyContent: 'flex-end' }}>
            <Text style={styles.headline}>{item.text}</Text>
          </View>
        )}
      />

      <View style={styles.footer}>
        <View style={styles.dots}>
          {SLIDES.map((s, i) => (
            <View key={s.key} style={[styles.dot, i === index && styles.dotActive]} />
          ))}
        </View>
        <NextButton progress={(index + 1) / SLIDES.length} onPress={next} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgAlt,
  },
  skip: {
    position: 'absolute',
    top: 64,
    right: 24,
    zIndex: 2,
  },
  skipText: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.text,
  },
  headline: {
    fontFamily: fonts.regular,
    fontSize: 26,
    lineHeight: 34,
    color: colors.text,
    paddingHorizontal: 28,
    marginBottom: 24,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 28,
    paddingBottom: 40,
  },
  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4A4A4A',
  },
  dotActive: {
    width: 26,
    backgroundColor: colors.white,
  },
  nextWrap: {
    width: 66,
    height: 66,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextInner: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';

const GREEN = '#35C759';

// Pilot app floating nav: Home, Missions, Live (green ring), Earnings, Profile
export default function PilotBottomNav({ active, navigation }) {
  const items = [
    { key: 'home', label: 'Home', icon: 'home', route: 'PilotMain' },
    { key: 'missions', label: 'Missions', icon: 'clipboard-outline', route: 'PilotMissions' },
    { key: 'live', label: 'Live', route: 'PilotTracker' },
    { key: 'earnings', label: 'Earnings', icon: 'cash-outline', route: 'Earnings' },
    { key: 'profile', label: 'Profile', icon: 'person-outline', route: 'PilotProfile' },
  ];

  const go = (route) => {
    if (navigation && route) navigation.navigate(route);
  };

  return (
    <View style={styles.nav}>
      {items.map((item) =>
        item.key === 'live' ? (
          <TouchableOpacity key={item.key} style={styles.navItem} onPress={() => go(item.route)}>
            <View style={[styles.liveRing, active === 'live' && { borderColor: GREEN }]} />
            <Text style={[styles.navLabel, { color: active === 'live' ? GREEN : GREEN }]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity key={item.key} style={styles.navItem} onPress={() => go(item.route)}>
            <Ionicons
              name={item.icon}
              size={20}
              color={active === item.key ? colors.white : '#8A8A8A'}
            />
            <Text style={[styles.navLabel, active === item.key && { color: colors.white }]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 24,
    height: 68,
    backgroundColor: '#1A1A1A',
    borderRadius: radius.pill,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  navItem: {
    alignItems: 'center',
    gap: 3,
    width: 58,
  },
  navLabel: {
    fontFamily: fonts.regular,
    fontSize: 10,
    color: '#8A8A8A',
  },
  liveRing: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: GREEN,
  },
});

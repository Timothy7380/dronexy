import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';

// Floating pill bottom navigation used across the client app.
// `active` = 'home' | 'missions' | 'messages' | 'profile'
export default function BottomNav({ active, navigation }) {
  const items = [
    { key: 'home', label: 'Home', icon: 'home', route: 'Main' },
    { key: 'missions', label: 'Missions', icon: 'clipboard-outline', route: 'Missions' },
    { key: 'plus', route: 'Missions' },
    { key: 'messages', label: 'Messages', icon: 'chatbubble-outline', route: 'Messages' },
    { key: 'profile', label: 'Profile', icon: 'person-outline', route: 'Profile' },
  ];

  const go = (route) => {
    if (navigation && route) navigation.navigate(route);
  };

  return (
    <View style={styles.nav}>
      {items.map((item) =>
        item.key === 'plus' ? (
          <TouchableOpacity key={item.key} style={styles.navPlus} onPress={() => go(item.route)}>
            <Ionicons name="add" size={30} color={colors.white} />
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
  navPlus: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 44,
  },
});

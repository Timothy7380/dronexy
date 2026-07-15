import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, fonts, radius } from '../theme';
import { SERVICES, ACTIVE_MISSIONS } from '../data/services';
import BottomNav from '../components/BottomNav';

function ServiceIcon({ item, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.service} onPress={onPress}>
      {item.image ? (
        <Image source={item.image} style={styles.serviceImage} />
      ) : (
        <View style={styles.serviceCircle}>
          <Ionicons name={item.icon} size={34} color="#3A3A3A" />
        </View>
      )}
      <Text style={styles.serviceLabel}>{item.label}</Text>
    </TouchableOpacity>
  );
}

function MissionCard({ mission, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.85} style={styles.card} onPress={onPress}>
      <View style={styles.thumb}>
        {mission.thumbnail ? (
          <Image source={mission.thumbnail} style={styles.thumbImage} />
        ) : (
          <Ionicons name="image-outline" size={22} color="#4A4A4A" />
        )}
      </View>
      <View style={styles.cardBody}>
        <View style={styles.cardTitleRow}>
          <Text style={styles.cardTitle} numberOfLines={1}>{mission.title}</Text>
          {mission.statusStyle === 'pill' ? (
            <View style={styles.statusPill}>
              <Text style={styles.statusPillText}>{mission.status}</Text>
            </View>
          ) : (
            <Text style={styles.statusText}>{mission.status}</Text>
          )}
        </View>
        <View style={styles.pilotRow}>
          <View style={styles.pilotAvatar}>
            <Ionicons name="person" size={9} color="#7A7A7A" />
          </View>
          <Text style={styles.pilotName}>{mission.pilot}</Text>
        </View>
        <Text style={styles.cardMeta}>{mission.meta}</Text>
      </View>
    </TouchableOpacity>
  );
}

// Client Home — greeting, services grid, location search, active missions, floating nav
export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 110 }}>
        <View style={styles.inner}>
          {/* Header */}
          <View style={styles.header}>
            <Image source={require('../../assets/avatar.png')} style={styles.avatar} />
            <View style={styles.headerIcons}>
              <TouchableOpacity style={styles.headerIcon}>
                <Ionicons name="search" size={22} color={colors.white} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerIcon} onPress={() => navigation.navigate('Notifications')}>
                <Ionicons name="notifications-outline" size={22} color={colors.white} />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.greeting}>Good morning, Rachael.</Text>
          <Text style={styles.subGreeting}>You have 2 active missions</Text>

          {/* Services grid */}
          <View style={styles.grid}>
            {SERVICES.map((item) => (
              <ServiceIcon
                key={item.key}
                item={item}
                onPress={() => navigation.navigate('ServiceRequest', { category: item.label.replace(/\n/g, ' ') })}
              />
            ))}
          </View>

          {/* Location search */}
          <View style={styles.search}>
            <Ionicons name="search" size={18} color={colors.textPlaceholder} />
            <TextInput
              style={styles.searchInput}
              placeholder="Location...."
              placeholderTextColor={colors.textPlaceholder}
            />
            <TouchableOpacity style={styles.addressBtn}>
              <Text style={styles.addressText}>Address</Text>
              <Ionicons name="chevron-down" size={14} color={colors.white} />
            </TouchableOpacity>
          </View>

          {/* Active missions */}
          <View style={styles.sectionRow}>
            <Text style={styles.sectionTitle}>Active Missions</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Missions')}>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>

          {ACTIVE_MISSIONS.map((m) => (
            <MissionCard key={m.key} mission={m} onPress={() => navigation.navigate('Tracker')} />
          ))}
        </View>
      </ScrollView>
      <BottomNav active="home" navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  inner: {
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 8,
    marginBottom: 18,
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 18,
  },
  headerIcon: {
    padding: 2,
  },
  greeting: {
    fontFamily: fonts.bold,
    fontSize: 26,
    color: colors.text,
  },
  subGreeting: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
    marginBottom: 22,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 18,
    marginBottom: 24,
  },
  service: {
    width: '23%',
    alignItems: 'center',
  },
  serviceCircle: {
    width: 78,
    height: 78,
    borderRadius: 39,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  serviceImage: {
    width: 78,
    height: 78,
    resizeMode: 'contain',
  },
  serviceLabel: {
    fontFamily: fonts.regular,
    fontSize: 10.5,
    color: colors.text,
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 14,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    borderRadius: radius.lg,
    height: 54,
    paddingLeft: 16,
    paddingRight: 6,
    marginBottom: 26,
  },
  searchInput: {
    flex: 1,
    fontFamily: fonts.regular,
    fontSize: 15,
    color: colors.text,
    marginLeft: 10,
    paddingVertical: 0,
  },
  addressBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: colors.green,
    borderRadius: radius.md,
    height: 42,
    paddingHorizontal: 16,
  },
  addressText: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.white,
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  sectionTitle: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: colors.text,
  },
  seeAll: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#161616',
    borderRadius: radius.lg,
    padding: 12,
    marginBottom: 14,
  },
  thumb: {
    width: 92,
    height: 92,
    borderRadius: radius.md,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  thumbImage: {
    width: 92,
    height: 92,
    resizeMode: 'cover',
  },
  cardBody: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'center',
  },
  cardTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  cardTitle: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: colors.text,
    flex: 1,
    marginRight: 8,
  },
  statusText: {
    fontFamily: fonts.black,
    fontSize: 10,
    color: colors.white,
    letterSpacing: 0.4,
  },
  statusPill: {
    backgroundColor: colors.white,
    borderRadius: radius.pill,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  statusPillText: {
    fontFamily: fonts.black,
    fontSize: 10,
    color: colors.black,
    letterSpacing: 0.4,
  },
  pilotRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  pilotAvatar: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  pilotName: {
    fontFamily: fonts.regular,
    fontSize: 13,
    color: colors.textSecondary,
  },
  cardMeta: {
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.textTertiary,
  },
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

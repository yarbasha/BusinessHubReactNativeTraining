import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { paginationUsers, refreshPaginationUsers } from '../redux/actions/usersActions';
import { paginationCardStyle } from '../styles/styles';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PaginationCard from '../components/PaginationCard';
import Header from '../components/Header';
import strings from '../localization/strings';
import colors from '../styles/colors';
import Background from '../components/Background';


function PaginationUsers(props) {

  useEffect(() => {
    props.fetchPaginationUsers(props.page, props.limit);
  }, []);

  return (
    <Background>
      <Header title={strings.users} />
      <View style={{ flex: 1 }}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={props.users}
          renderItem={({ item }) => <PaginationCard user={item} />}
          onEndReachedThreshold={0.1}
          onEndReached={() => props.fetchPaginationUsers(props.page, props.limit)}
          ListFooterComponent={() => {
            if (props.ended) return <Text style={paginationCardStyle.endText}>{strings.endList}</Text>
            if (props.isLoading) return <ActivityIndicator color={colors.primary} size={hp(8)} />
            return null
          }}
          refreshing={props.isRefresh}
          onRefresh={() => {
            props.refreshPaginationUsers();
            props.fetchPaginationUsers(1, 3);
          }}
        />
      </View>
    </Background>
  );
}

const mapStateToProps = (state) => ({
  language: state.language.lang,
  isLoading: state.paginationUsers.isLoading,
  page: state.paginationUsers.page,
  limit: state.paginationUsers.limit,
  users: state.paginationUsers.users,
  ended: state.paginationUsers.ended,
  isRefresh: state.paginationUsers.isRefresh
});

const mapDispatchToProps = (dispatch) => ({
  fetchPaginationUsers: (page, limit) => dispatch(paginationUsers(page, limit)),
  refreshPaginationUsers: () => dispatch(refreshPaginationUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(PaginationUsers);
const RecipeStyle = {
  primary: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 10,
    flexDirection: 'column',
    backgroundColor: '#07174c'
  },
  titleBox: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom:50,
    flexDirection: 'row',
    flex: 5,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#07174c'
  },
  title: {
    fontSize: 60,
    color: '#ffffff',
    fontFamily: 'Lobster'
  },
  infoBar: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#07174c',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#4d962b',
    fontFamily:'OpenSans'
  },
  infoBox: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  infoText: {
    fontSize: 18,
    color: '#ffffff',
    fontFamily: 'OpenSans_Bold'
  },
  genText: {
    fontSize: 17,
    color: '#ffffff'
  },
  ingredientsBox: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#07174c',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#ffffff',
    fontFamily: 'OpenSans',
    fontSize: 16,
  },
  titleBoxTwo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    backgroundColor: '#ffffff',
    fontFamily: 'OpenSans_Bold',
  },
  subTitle: {
    fontSize: 30,
    borderBottomWidth: 1,
    borderColor: '#07174c',
    color: '#505050',
    backgroundColor: '#ffffff',
    fontFamily: 'Lobster',
  },
  instructionsBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#07174c',
    paddingTop: 15,
    paddingBottom: 20,
    backgroundColor: '#ffffff',
    fontFamily:'OpenSans',
    fontSize: 16,
  }
};

export default RecipeStyle;

import {get} from '../apiHelpers'

const fetchingEmailSucceeded = (emailList=[]) => {
  return {
    type: "FETCHING_EMAILS_SUCCEEDED",
    payload: {
      emailList
    }
  }
}
const fetchingEmailsFailed = (errorMsg) => {
  return {
    type: "FETCHING_EMAILS_FAILED",
    payload: {
      errorMsg
    }
  }
}

export const fetchEmails = () => {
  return dispatch => {
    return get("mails/inbox", "")
      .then(jsonResponse => {
        dispatch(fetchingEmailSucceeded(jsonResponse.data))
      })
      .catch(errorResponse => {
        dispatch(fetchingEmailsFailed(errorResponse.message))
      })
  }
}

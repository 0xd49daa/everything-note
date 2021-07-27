import produce from 'immer'

export const VARS = {
  OPEN_ITEM: 'openItem'
}

export const ACTIONS = {
  SET_OPEN_ITEM: 'SET_OPEN_ITEM'
}

export const INITIAL_STATE = {
  [VARS.OPEN_ITEM]: null
}

function setOpenItem (draft, action) {
  draft[VARS.OPEN_ITEM] = action.value
}

export default produce((draft, action) => {
  switch (action.type) {
    case ACTIONS.SET_OPEN_ITEM:
      setOpenItem(draft, action)
      break
  }
})

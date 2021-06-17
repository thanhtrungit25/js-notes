import { Fragment } from 'react'
import { useTypedSelector } from '../hooks/use-typed-selector'
import AddCell from './add-cell'
import CellListItem from './cell-list-item'

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { data, order } }) =>
    order.map((id) => data[id])
  )

  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <AddCell previousCellId={cell.id} />
      <CellListItem key={cell.id} cell={cell} />
    </Fragment>
  ))

  return (
    <div>
      {renderedCells}
      <AddCell forceVisible={cells.length === 0} previousCellId={null} />
    </div>
  )
}

export default CellList

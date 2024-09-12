'use client'
import { useTableCell } from '@payloadcms/ui';
export const CustomCell: React.FC<any> = (props) => {
    const { cellData } = useTableCell();
    return <span>[custom cell] {cellData as string}</span>
  }

export default CustomCell;
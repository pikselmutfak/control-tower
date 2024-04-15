import { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel, Box, Typography, CircularProgress,Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PauseIcon from '@mui/icons-material/Pause';
import ModalDetails from '@/components/Storage/components/ModalDetails'

const CustomTable = ({data=[],rows=[],title,pageSize=10,isLoading}) => {
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' veya 'desc'
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleRowClick = () => {
        setIsModalOpen(true);
    };

    const handleSort = (column) => {
        if (sortBy === column) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(column);
            setSortOrder('asc');
        }
    };


    const sortedData = sortBy ? [...data].sort((a, b) => {
        if (sortOrder === 'asc') {
            if (typeof a[sortBy] === 'number') {
                return a[sortBy] - b[sortBy];
            }
            if (typeof a[sortBy] === 'boolean') {
                return a[sortBy] === b[sortBy] ? 0 : a[sortBy] ? -1 : 1;
            }
            return a[sortBy].localeCompare(b[sortBy]);
        } else {
            if (typeof a[sortBy] === 'number') {
                return b[sortBy] - a[sortBy];
            }
            if (typeof a[sortBy] === 'boolean') {
                return a[sortBy] === b[sortBy] ? 0 : a[sortBy] ? 1 : -1;
            }
            return b[sortBy].localeCompare(a[sortBy]);
        }
    }) : data;

    const renderCellContent = (column, value,message) => {
        if (column.key === 'action') {
            return (
                <Box style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                    <Box style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#D9D9D9' }} />
                </Box>
               
            );
        }
        else if (column.key === "number") {
            return (
                <Box style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                <Box
                    sx={{
                        width: '70px',
                        padding: '4px',
                        borderRadius: '5px',
                        bgcolor: '#F2F2F2',
                        textAlign: "center"
                    }}
                >
                    <Typography style={{ fontSize: "12px", fontWeight: 600 }}>{value}</Typography>
                </Box>
                </Box>
            )
        }
        else if (column.key === "ratio") {
            return (
                <Box style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                <Box
                    sx={{
                        width: '70px',
                        padding: '4px',
                        borderRadius: '5px',
                        bgcolor: '#F2F2F2',
                        textAlign: "center"
                    }}
                >
                    <Typography style={{ fontSize: "12px", fontWeight: 600 }}>%{value}</Typography>
                </Box>
                </Box>
            )
        }
        else if (column.key === "boolean") {
            return (
                <Box style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                <Box
                    sx={{
                        width: '70px',
                        padding: '4px',
                        borderRadius: '5px',
                        bgcolor: '#F2F2F2',
                        textAlign: "center"
                    }}
                >
                    <Typography style={{ fontSize: "12px", fontWeight: 600 }}>{value ? "Var" : "Yok"}</Typography>
                </Box>
                </Box>
            )
        }
        else if (column.key === "status") {
            return (
                <Box style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
                <Box
                    sx={{
                        
                        width: '120px',
                        padding: '4px',
                        borderRadius: '5px',
                        bgcolor: value === "error" ? '#C00000' : value === "warning" ? "#FFC000" : value === "success" ? "#70AD47" : "#F2F2F2" ,
                        textAlign: "center"
                    }}
                >
                    <Typography style={{ fontSize: "12px", fontWeight: 600 }}>{message}</Typography>
                </Box>
                </Box>
            )
        }
        else {
            return value;
        }
    };

    const totalPages = Math.ceil(sortedData.length / pageSize);

    const handlePageChange = (action) => {
        if (action === 'prev' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else if (action === 'next' && currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const paginatedData = sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    return (
        <TableContainer component={Paper} style={{marginTop:"20px"}}>
            <Box style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "10px 4px 10px 28px" }}>
                <Typography style={{ display: "flex", alignItems: "center", fontSize: "21px", fontWeight: 700 }}>
                    <KeyboardArrowDownIcon style={{ marginRight: "5px", marginTop: "2px" }} />
                    {title}
                </Typography>
                <Box style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Typography style={{marginRight:"14px",color:"#8B8080",fontWeight:600}}>{currentPage}/{totalPages}</Typography>
                <Button style={{ minWidth: 0, width: 25, height: 30, borderRadius: "5px", marginRight: "5px", backgroundColor: "#F7F7F7",color:"#B7B7B7",borderColor:"#E8E8E8"}} variant='outlined' onClick={() => handlePageChange('prev')} disabled={currentPage === 1}>
                <NavigateBeforeIcon />
            </Button>
            <Button style={{ minWidth: 0, width: 25, height: 30, borderRadius: "5px", marginRight: "5px", backgroundColor: "#F7F7F7",color:"#B7B7B7",borderColor:"#E8E8E8" }} variant='outlined'>
                <PauseIcon />
            </Button>
            <Button style={{ minWidth: 0, width: 25, height: 30, borderRadius: "5px", marginRight: "5px", backgroundColor: "#F7F7F7",color:"#B7B7B7",borderColor:"#E8E8E8" }} variant='outlined' onClick={() => handlePageChange('next')} disabled={currentPage === totalPages}>
                <NavigateNextIcon />
            </Button>
</Box>
            </Box>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        {rows.map((row, index) => (
                            <TableCell key={index} align="center">
                                {row.sorting ?
                                    <TableSortLabel
                                        active={true}
                                        direction={sortBy === row.name ? sortOrder :                                    'asc'}
                                        onClick={() => handleSort(row.name)}
                                        IconComponent={KeyboardArrowUpIcon}
                                        hideSortIcon={false}
                                    >
                                        {row.title}
                                    </TableSortLabel>
                                    :
                                    row.title
                                    }
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {isLoading ? (
        <TableRow>
            <TableCell colSpan={rows.length} align="center">
                <CircularProgress size="1.3rem" color="inherit" />
            </TableCell>
        </TableRow>
    ) : paginatedData.length > 0 ? (
        paginatedData.map((row, index) => (
            <TableRow key={index} onClick={handleRowClick} style={{ cursor: "pointer" }}>
                {rows.map((column, columnIndex) => (
                    <TableCell key={columnIndex} align="center">
                        {renderCellContent(column, row[column.name], row.message)}
                    </TableCell>
                ))}
            </TableRow>
        ))
    ) : (
        <TableRow>
        <TableCell colSpan={rows.length} align="center">
            <Typography style={{fontSize:"14px",color:"#8B8080",fontWeight:400}}>Listelenecek herhangi bir veri bulunamadı.</Typography>
        </TableCell>
    </TableRow>
    )}
                    </TableBody>
                </Table>
                <ModalDetails open={isModalOpen} handleClose={() => {setIsModalOpen(false)}} />
            </TableContainer>
        );
    };
    
    export default CustomTable;
    

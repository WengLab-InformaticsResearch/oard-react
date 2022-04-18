import React, { Component } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import InfoIcon from '@mui/icons-material/Info';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';


class DomainSelectComp extends Component {

    state = {
        domainHelperOpen: false,
        domain: "phenotypes",
        rows:
            [
                {id : 1, domain: 'All', desc: 'return both HPO and MONDO terms'},
                {id : 2, domain: 'Phenotypes/HPO', desc: 'only return HPO terms'},
                {id : 3, domain: 'Diseases/Mondo', desc: 'only return MONDO terms'}
            ],
        columns:
            [
                { field: "domain", headerName: "Domain", width: 200 },
                { field: "desc", headerName: "Description", width: 500 },
            ]
    }

    handleDomainHelperOpen = () => {
        this.setState({ domainHelperOpen: true });
    }
    handleDomainHelperClose = () => {
        this.setState({ domainHelperOpen: false });
    }

    onDomainSelectChange = (e) => {
        this.setState({ domain: e.target.value })
        this.props.handleDomainSelectChange(e.target.value);
    }

    render() {

        return (
            <FormControl sx={{ display: 'flex' }}>
                <InputLabel>Domain<InfoIcon onClick={this.handleDomainHelperOpen}></InfoIcon></InputLabel>
                <Dialog
                    fullWidth={true}
                    open={this.state.domainHelperOpen}
                    onClose={this.handleDomainHelperClose}
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Use domain select Helper"}
                    </DialogTitle>
                    <DialogContent>
                        <div style={{ height: 500, width: "100%" }}>
                            <DataGrid rows={this.state.rows} columns={this.state.columns} />
                        </div >
                    </DialogContent>
                    </Dialog>
                <Select
                    value={this.state.domain}
                    label="Domain"
                    onChange={this.onDomainSelectChange}
                >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="phenotypes">Phenotypes/HPO</MenuItem>
                    <MenuItem value="diseases">Diseases/Mondo</MenuItem>
                </Select>
            </FormControl>

        )
    }
}

export default DomainSelectComp;
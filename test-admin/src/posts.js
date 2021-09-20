import React from 'react';
import { List, Datagrid, TextField,EditButton, ReferenceField } from 'react-admin';

export const PostList = props => (
    <List {...props}>
        <Datagrid >
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="id" />
            </ReferenceField>
            <TextField source="name" />
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
);
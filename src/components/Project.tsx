import React from 'react';
import { useTonConnect } from "../hooks/useTonConnect";
// import { useFundProjectContract } from "../hooks/useFundProjectContract";
import { Card, FlexBoxCol, FlexBoxRow, Ellipsis, Button } from "./styled/styled";

interface ProjectProps {
    name: string;
    description: string;
    goal: number;
    fundsRaised: number;
}

export const FundProject: React.FC<ProjectProps> = ({ name, description, goal, fundsRaised }) => {
    const { connected } = useTonConnect();
    // const { address, sendFund } = useFundProjectContract();

    return (
        <div className="Container">
            <Card>
                <FlexBoxCol>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <FlexBoxRow>
                        <b>Address</b>
                        {/* <Ellipsis>{address}</Ellipsis> */}
                    </FlexBoxRow>
                    <FlexBoxRow>
                        <b>Funding goal</b>
                        <div>{goal}</div>
                    </FlexBoxRow>
                    <FlexBoxRow>
                        <b>Funds raised</b>
                        <div>{fundsRaised ?? "Loading..."}</div>
                    </FlexBoxRow>
                    <Button
                        disabled={!connected}
                        className={`Button ${connected ? "Active" : "Disabled"}`}
                        onClick={() => {
                            // sendFund();
                        }}
                    >
                        Fund this project
                    </Button>
                </FlexBoxCol>
            </Card>
        </div>
    );
};
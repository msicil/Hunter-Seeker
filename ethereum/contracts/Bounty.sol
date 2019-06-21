pragma solidity ^0.4.25;

contract BountyHubFactory {
    address[] public deployedHubs;

    function createBountyHub(string accessPoint) public payable {
        address newBountyHub = new BountyHub(accessPoint,msg.sender);
        deployedHubs.push(newBountyHub);
    }

    function getDeployedHubs() public view returns (address[]) {
        return deployedHubs;
    }
}

contract BountyHub {
    struct BugHunt {
        address secret;
        uint reward;
        bool complete;
        string solution;
    }

    BugHunt[] public hunts;
    address public manager;
    string public accessPoint;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    constructor(string url, address creator) public {
        manager = creator;
        accessPoint = url;
    }

    function fundHub() public payable {
    }

    function createHunt(address secret, uint reward) public restricted {
        BugHunt memory newHunt = BugHunt({
           secret: secret,
           reward: reward,
           complete: false,
           solution: ''
        });

        hunts.push(newHunt);
    }

    function submitSolution(uint index, address secret, string solution) public returns(string) {
        BugHunt storage hunt = hunts[index];

        if(hunt.complete == true)
        {
            return "Hunt already solved";
        } else if(secret != hunt.secret){
            return 'Invalid secret';
        } else {
        hunt.solution = solution;
        hunt.complete = true;
        msg.sender.transfer(hunt.reward);
        return "Reward Sent!";
        }
    }

    function getSummary() public restricted view returns (
      uint, uint, string, address
      ) {
        return (
          address(this).balance,
          hunts.length,
          accessPoint,
          manager
        );
    }

}

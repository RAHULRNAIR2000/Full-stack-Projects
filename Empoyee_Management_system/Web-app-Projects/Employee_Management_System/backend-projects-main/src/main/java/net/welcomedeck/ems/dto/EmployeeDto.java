package net.welcomedeck.ems.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String hometown;
    private String education;
    private String experience;
    private String hobby;
    private Long contactNumber;
    private String altProfession;
    private String quote;
    private String coreSkills;
    private String IbuName;
    private String ManagerName;

}

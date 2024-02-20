package net.welcomedeck.ems.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="employees")
public class Employee {

    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(name="email_id",nullable = false,unique = true)
    private String email;

    @Column(name="hometown")
    private String hometown;

    @Column(name="education")
    private String education;

    @Column(name="experience")
    private String experience;

    @Column(name="hobby")
    private String hobby;

    @Column(name="contactNumber")
    private Long contactNumber;

    @Column(name="altProfession")
    private String altProfession;

    @Column(name="quote")
    private String quote;

    @Column(name="coreSkills")
    private String coreSkills;

    @Column(name="ibuName")
    private String IbuName;

    @Column(name="ManagerName")
    private String ManagerName;

}

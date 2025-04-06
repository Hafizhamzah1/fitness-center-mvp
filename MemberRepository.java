package com.example.fitnesscentre.repository;

import com.example.fitnesscentre.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
}